function add()
{
    var n1 = parseInt(document.getElementById("firstno").value);
    var n2 = parseInt(document.getElementById("secno").value);
    var soln = n1 + n2;
    document.getElementById("result").value = soln;
}
function subtract()
{
    var n1 = parseInt(document.getElementById("firstno").value);
    var n2 = parseInt(document.getElementById("secno").value);
    var soln = n1 - n2;
    document.getElementById("result").value = soln;
}
function multiply()
{
    var n1 = parseInt(document.getElementById("firstno").value);
    var n2 = parseInt(document.getElementById("secno").value);
    var soln = n1 * n2;
    document.getElementById("result").value = soln;
}
function divide()
{
    var n1 = parseInt(document.getElementById("firstno").value);
    var n2 = parseInt(document.getElementById("secno").value);
    var soln = n1 / n2;
    document.getElementById("result").value = soln;
}