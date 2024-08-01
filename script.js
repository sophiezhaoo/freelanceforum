const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];

let averagePrice = 0;

function createFreelanceRow( freelancer ) {
    const row = document.createElement('tr')

    const name = document.createElement('td')
    name.textContent = freelancer.name;

    const occupation = document.createElement('td')
    occupation.textContent = freelancer.occupation;

    const price = document.createElement('td')
    price.textContent = freelancer.price;

    row.append(name)
    row.append(occupation)
    row.append(price)

    return row;

}

freelancers.forEach((freelancer, index) => {
    setTimeout(() => {
        const nextRow = createFreelanceRow(freelancer);
        const table = document.querySelector('table');
        table.append(nextRow);
    }, index * 1000);
});