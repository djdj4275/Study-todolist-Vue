new Vue({
    el : "#app",
    data : {
        b : ["0.jpg","1.jpg"],
        memolist : ["미리 만들어진 메모입니다","미리 만들어진 메모입니다2","한번 더 추가합니다"],
        day : new Date(),
        todolist : [],
    },
    methods : {
        memo_add : function(memo) {
            this.memolist.push(memo);
        },
        todo_add : function(memo) {
            this.todolist.push(memo);
        },
    },
    computed : {
        ran : function() {
            return this.b[Math.floor(Math.random()*this.b.length)];
        },
    }
})