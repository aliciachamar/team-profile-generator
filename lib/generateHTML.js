const generateHTML = (data) => {
    let employeeCards = [];
    for (let i = 1; i < data.length; i++) {
        switch (data[i].getRole()) {
            case "Engineer": {
                let newCard = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data[i].getName()}</h5>
                        <p class="card-text">${data[i].getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${data[i].getId()}</li>
                        <li class="list-group-item">Email: ${data[i].getEmail()}</li>
                        <li class="list-group-item">GitHub: ${data[i].getGithub()}</li>
                    </ul> 
                </div>`;
                employeeCards.push(newCard);
                break;
            }
            case "Intern": {
                let newCard = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data[i].getName()}</h5>
                        <p class="card-text">${data[i].getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${data[i].getId()}</li>
                        <li class="list-group-item">Email: ${data[i].getEmail()}</li>
                        <li class="list-group-item">School: ${data[i].getSchool()}</li>
                    </ul> 
                </div>`;
                employeeCards.push(newCard);
                break;
            }
        }
    }
    return `
    <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>

        <body>
            <header>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">My Team</h1>
                    </div>
                </div>
            </header>

            <section>
                <div class="container">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${data[0].name}</h5>
                            <p class="card-text">${data[0].getRole()}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Employee ID: ${data[0].id}</li>
                            <li class="list-group-item">Email: ${data[0].email}</li>
                            <li class="list-group-item">Office Number: ${data[0].officeNumber}</li>
                        </ul> 
                    </div>
                    ${employeeCards}
                </div>
            </section>
        </body>
    </html>
    `;
}

module.exports = generateHTML;