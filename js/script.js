let container = document.querySelector('.row')

for (let i = 1; i <= 100; i++) {
    let content = document.createElement('div');
    content.classList.add("col-1");
    content.innerText = i;

    if (i % 3 === 0 && i % 5 === 0) {
        content.innerText = 'FizzBuzz'
    }
    else if (i % 3 === 0) {
        content.innerText = 'Buzz'
    }
    else if (i % 5 === 0) {
        content.innerText = 'Fizz'
    }

    container.append(content)
}