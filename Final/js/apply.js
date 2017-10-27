function displayBox(id,box)
{
    var option = document.getElementById(id);
    var optvalue = option.options[option.selectedIndex].value;
    if(optvalue == 'yes')
        {
            document.getElementById(box).style.display = "block";
        }
}