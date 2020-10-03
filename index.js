// function printMessage(elementId, format, message) {
//     document.querySelector(`#${elementId}`).innerHTML = `<${format}>${message}</${format}>`;
// }

// printMessage('msg', 'h1', 'Привет мир!!!');

function addToDom(elementId) {
    return function(content) {
        document.querySelector(`#${elementId}`).innerHTML = content;
    }
}

function h1(message) {
    return '<h1>' + message + '</h1>';
}

function echo(message) { 
    return message
}

let run = function(f, g, h) {
    return function(x) {
        return f(g(h(x)));
    };
};

let printMessage = run(addToDom('msg'), h1, echo);

printMessage('Hello World!');