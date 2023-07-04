fetch("/employees.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(employees) {
        console.log(employees); // Log the response to verify if data is loaded correctly

        let placeholder = document.querySelector("#data-output");
        let tableRows = "";

        for (let employee of employees) {
            tableRows += `
                <tr>
                    <td><img src="${employee.image}" alt="Employee Image"></td>
                    <td>${employee.name}</td>
                    <td>${employee.age}</td>
                    <td>${employee.salary || employee.P_no}</td>
                    <td>${employee.password || employee.Password}</td>
                </tr>
            `;
        }

        placeholder.innerHTML = tableRows;
    });
