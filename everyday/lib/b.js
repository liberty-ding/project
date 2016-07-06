var TodoApp = Nuclear.create({
    add: function (evt) {
        evt.preventDefault();
        var textBox = this.node.querySelector('input');
        this.option.items.push(textBox.value);
    },
    installed: function () {
        var form = this.node.querySelector('form');
        form.addEventListener('submit', this.add.bind(this), false);
    },
    render: function () {
        return '<h3>TODO</h3>';
    }
});

new TodoApp( { items: [] },"#container");