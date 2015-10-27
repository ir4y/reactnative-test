import mixins from 'baobab-react/mixins';

/*
 SchemaCursorMixin is designed for use with baobab-react mixin `branch`.

 This mixin add cursors from component `schema` for `tree` component prop.

 Example of usage:
 var EditForm = React.createClass({
 mixins: [SchemaBranchMixin],
 schema: {name: '', externalId: ''},
 cursors: {
 editForm: ['editForm']
 },
 render: function () {
   We have this.cursors.editForm (via baobab-react branch mixin)
   And we have `this.cursors.name`, `this.cursors.externalId` via
   SchemaCursorMixin.
   `this.state.name` and others state params contains value from
   appropriate cursor via baobab-react branch mixin

   If `tree` props is not received from child component, global tree will
   be used
 }
 });
 */
const SchemaBranchMixin = {
  getInitialState: function () {
    this.cursors = this.cursors || {};

    let tree = this.props.tree || this.context.tree;

    for (let key in this.schema) {
      // TODO: check how it works with nested schema and overlapped schemas
      if (this.schema.hasOwnProperty(key)) {
        this.cursors[key] = tree.select(key);
        if (!this.cursors[key].get()) {
          this.cursors[key].set(this.schema[key]);
        }
      }
    }
  }
};

exports.SchemaBranchMixin = {
  mixins: [SchemaBranchMixin, mixins.branch]
};
exports.RootMixin = mixins.root;
