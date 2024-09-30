window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    const hello = sayHello();
    console.log(hello);
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}

/**
 * Function to show alert with the selected radio button value
 */
export function showAlert() {
    const options = document.getElementsByName('option');
    for (let option of options) {
        if (option.checked) {
            alert(option.value);
            break;
        }
    }
}
