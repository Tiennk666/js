var name_items = document.getElementsByName('name_items');
var items = document.getElementsByClassName('items');
var add_items = document.getElementById('btn_add');
function change() {
    for (let i = 0; i < name_items.length; i++) {
        name_items[i].onchange = function () {
            if (name_items[i].checked == true) {
                items[i].style.color = 'red';
                items[i].style.fontStyle = 'italic';
                items[i].style.textDecorationLine = 'line-through';
            }
            else if (name_items[i].checked == false) {
                items[i].style.color = 'black';
                items[i].style.fontStyle = 'normal';
                items[i].style.textDecorationLine = 'none';
            }
        };
   
    }
}
change();
add_items.onclick  = function(){
    var new_items = document.getElementById('add_items').value;
    if (new_items != '') {
        var html = '<div class="items"><input type="checkbox" name="name_items" value="' + new_items + '" />' + new_items + '</div>';
        document.getElementById('list_items').insertAdjacentHTML('afterend', html);
        document.getElementById('add_items').value = "";
    }
    change();
};



   