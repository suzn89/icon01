  		function DropDown(el) {
            this.adm_menu = el;
            this.initEvents();
        }
        DropDown.prototype = {
            initEvents : function() {
                var obj = this;

                obj.adm_menu.on('click', function(event){
                    $(this).toggleClass('active');
                    event.stopPropagation();
                });	
            }
        }

        $(function() {

            var adm_menu = new DropDown( $('#adm_menu') );

            $(document).click(function() {
                // all dropdowns
                $('.adminmn').removeClass('active');
            });

        });