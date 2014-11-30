$(function(){
    var MESSAGES = {
        ADDED_NAME_SUCCESS: 'User was successfully added.<br />Refresh the page or click on this dialog to see the changes.'
    };

    var visitPersistor = {
        getName: function() { return sessionStorage.getItem('name'); },
        setName: function(name) { sessionStorage.setItem('name', name); },
        getSessionVisits: function() { return (!sessionStorage.getItem('sessVisits')) ? 0 : sessionStorage.getItem('sessVisits'); },
        increaseSessionVisits: function() {
            var sessVisits = sessionStorage.getItem('sessVisits');
            if(!sessVisits) {
                sessVisits = 1;
                sessionStorage.setItem('sessVisits', sessVisits);
            } else {
                sessionStorage.setItem('sessVisits', ++sessVisits);
            }
        },
        getTotalVisits: function() { return localStorage.getItem('totalVisits'); },
        increaseTotalVisits: function() {
            var totalVisits = localStorage.getItem('totalVisits');
            if(!totalVisits) {
                totalVisits = 1;
                localStorage.setItem('totalVisits', totalVisits);
            } else {
                localStorage.setItem('totalVisits', ++totalVisits);
            }
        }
    };

    if(!sessionStorage.getItem('name')) {
        $("#wrapper").html(TEMPLATES.ADD_USER_FORM);
    } else {
        var user = visitPersistor.getName();
        visitPersistor.increaseSessionVisits();
        var visits = visitPersistor.getSessionVisits();
        visitPersistor.increaseTotalVisits();
        var totalVisits = visitPersistor.getTotalVisits();

        var msg = TEMPLATES.LIST_SESSIONS_FORM;
        msg = msg.replace('{user}', user);
        msg = msg.replace('{visits}', visits);
        msg = msg.replace('{totalVisits}', totalVisits);

        $("#wrapper").html(msg);
    }

    $("#setName").on('click', function(e) {
        var n = noty(
            {
                text: MESSAGES.ADDED_NAME_SUCCESS,
                type: 'success',
                modal: true,
                callback: {
                    onCloseClick: function() {
                        location.reload();
                    }
                }
            }
        );

        visitPersistor.setName($("#name").val());

        // Disables the Add button
        $(this).addClass('disabled');
    });
});