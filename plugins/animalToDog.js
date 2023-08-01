module.exports = function ({ types: t }) {
  return {
    name: "animalToDog",
    visitor: {
      Identifier(path, state) {
        if (path.node.name === "animal" && state.opts.ES5) {
          path.node.name = "dog";
        }
      },
      VariableDeclaration(path, state) {
        if (path.node.kind === "let" && state.opts.ES5) {
          path.node.kind = "var";
        }
      },
    },
  };
};
