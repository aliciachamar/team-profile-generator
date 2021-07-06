const generateHTML = (data) => {
    let employeeCards = [];
    for (let i = 1; i < data.length; i++) {
        let newCard;
        switch (data[i].getRole()) {
            case "Engineer": 
                newCard = `
                <div class="card col-sm-3 m-2 border border-info">
                    <div class="card-body">
                        <h5 class="card-title text-info">${data[i].getName()}</h5>
                        <p class="card-text text-secondary">${data[i].getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${data[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${data[i].getEmail()}" class="text-body">${data[i].getEmail()}</a></li>
                        <li class="list-group-item">Github: <a href="https://www.github.com/${data[i].getGithub()}" class="text-body">${data[i].getGithub()}</a></li>
                    </ul> 
                </div>`;
                employeeCards.push(newCard);
                break;
            case "Intern": 
                newCard = `
                <div class="card col-sm-3 m-2 border border-info">
                    <div class="card-body">
                        <h5 class="card-title text-info">${data[i].getName()}</h5>
                        <p class="card-text text-secondary">${data[i].getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${data[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${data[i].getEmail()}" class="text-body">${data[i].getEmail()}</a></li>
                        <li class="list-group-item">School: ${data[i].getSchool()}</li>
                    </ul> 
                </div>`;
                employeeCards.push(newCard);
                break;
        }
    }
    return `
    <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <title>My Team</title>
            </head>

        <body class="bg-light">
            <header>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4 text-primary">My Team</h1>
                    </div>
                </div>
            </header>

            <section>
                <div class="container-fluid row justify-content-center">
                    <div class="card col-sm-3 m-2 border border-primary">
                        <div class="card-body">
                            <h5 class="card-title text-primary">${data[0].name}</h5>
                            <p class="card-text text-secondary">${data[0].getRole()}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Employee ID: ${data[0].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${data[0].getEmail()}" class="text-body">${data[0].getEmail()}</a></li>
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