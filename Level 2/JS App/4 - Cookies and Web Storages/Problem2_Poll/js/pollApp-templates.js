var TEMPLATES = {
    ADD_USER_FORM: '<div class="row"> \
        <div class="input-group col-md-4"> \
            <label for="name" class="input-group-addon glyphicon glyphicon-user"></label> \
            <input class="form-control" type="text" id="name" placeholder="name ..." /> \
            <span class="input-group-btn"> \
                <button class="btn btn-default" type="button" id="setName">Add me</button> \
            </span> \
            </div> \
        </div>',
    LIST_SESSIONS_FORM: '<ul><li>{user} <span class="badge">{visits}</span></li><li>total visits <span class="badge">{totalVisits}</span></li></ul>'
};