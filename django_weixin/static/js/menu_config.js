/**
 * Created by fengxiaolong on 16/4/12.
 */
$(function () {
});

function confirm_button_click() {
    var final_string = "";
    var menu_1_array = new Array();
    var menu_2_array = new Array();
    var menu_3_array = new Array();

    for (i = 1; i < 16; i++) {
        if (i < 6) {
            menu_1_array.push($("#sub_" + i).val());
        }
        if (i > 5 && i < 11) {
            menu_2_array.push($("#sub_" + i).val());
        }
        if (i > 10) {
            menu_3_array.push($("#sub_" + i).val());
        }
    }
    var main_menu_1 = $("#main-menu-first").val();
    var main_menu_2 = $("#main-menu-second").val();
    var main_menu_3 = $("#main-menu-third").val();
    var final_json_string = {
        "menu_1": [
            {
                "menu_title": main_menu_1
            },
            {
                "child_menu": menu_1_array
            }
        ],
        "menu_2": [
            {
                "menu_title": main_menu_2
            },
            {
                "child_menu": menu_2_array
            }
        ],
        "menu_3": [
            {
                "menu_title": main_menu_3
            },
            {
                "child_menu": menu_3_array
            }
        ]
    };
    //console.log(menu_1_array);
    //console.log(menu_2_array);
    //console.log(menu_3_array);
    console.log(final_json_string);
}