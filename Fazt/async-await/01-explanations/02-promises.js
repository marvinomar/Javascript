const requestHandler = (req, res) => {
    User.findById(req.userId)
        .then((user) => {
            return Tasks.findById(user.tasksId);
        })
        .then(function(task){
            task.completed = true;
            return tasks.save();

        })
        .then(()=>{
            res.send('Tasks completed');
        })
        .catch((errors) => {
            res.send(errors);
        });
}