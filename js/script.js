let container = document.querySelector('.row')

for (let i = 1; i <= 100; i++) {
    let content = document.createElement('div');
    content.classList.add("col-1");
    content.innerText = i;

    if (i % 3 === 0 && i % 5 === 0) {
        content.innerText = 'FizzBuzz'
        content.classList.add("bg-info");
        content.classList.add("text-white");
        content.classList.add("border-out");


    }
    else if (i % 3 === 0) {
        content.innerText = 'Buzz'
        content.classList.add("bg-success");
        content.classList.add("text-white");
        content.classList.add("border-out");
    }
    else if (i % 5 === 0) {
        content.innerText = 'Fizz'
        content.classList.add("bg-warning");
        content.classList.add("text-white");
        content.classList.add("border-out");
    }

    container.append(content)
}