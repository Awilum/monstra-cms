$.monstra.users = {

    init: function() {
        this.usersFrontendRegistration();
    },

    usersFrontendRegistration: function() {
        $("[name=users_frontend_registration]").click(function() {
            $("[name=users_frontend]").submit();
        }); 
    }

};
