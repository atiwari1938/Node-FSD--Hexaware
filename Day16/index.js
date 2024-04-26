const express = require('express');
var bodyParser = require("body-parser");

const departmentRouter = require('./controllers/department_controller');
const path = require('path');
const { getDepts } = require('./services/newdep.service');
const logRequest = require('./middleware/logrequest');
const notfound=require('./middleware/notfound');
const employeeservice =require('./services/employee.service');
const emplistrouter=require('./controllers/emplist')
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
//log request
app.use(logRequest);



// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use('/departments', departmentRouter);



app.get('/deptlist', async (req, res) => {
    try {
        const departments = await getDepts(); // Use getDepts from the service
        res.render('deptlist', { departments }); // Pass departments data to the template
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

//emplist
// app.get('/EmpList', async (req, res) => {
//     try {
//         // Parse the query string to extract the "deptno" parameter
//         const deptno = req.query.deptno;

//         // Fetch employee details based on the given deptno or all employee details if deptno is missing
//         const employees = deptno ? await employeeService.getEmployeesByDept(deptno) : await employeeService.getAllEmployees();

//         // Send the employee details as a response
//         res.json(employees);
//     } catch (error) {
//         console.error('Error fetching employee details:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// default request
app.get("/", function(req,res)  
{
    let resultStr  = "<h1 align='center'>Welcome to Express Web Application<h1/>";
    res.send(resultStr);
});

app.use(express.static(path.join(__dirname,'public')));
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','About.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});
app.use('/',emplistrouter);
//notfound middleware
app.use(notfound);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`);
});
