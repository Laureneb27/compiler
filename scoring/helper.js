exports.allConsoleRemove = (ast) => {
    return 1;
}

exports.allDeclaredIsUsed = (ast) => {

    const variableIAffected = ast
        .filter(t => t.type === "variableAffectation")
        .map(t => t.variableName);
    const variableIsUsed = ast
        .filter(t => t.type === "objectMethodCall")

    console.log(variableIsUsed)
    // console.log(variableIAffected)
    // return 1;
}

exports.allUsedIsDeclared = (ast) => {
    const variableIsDeclared = ast
        .filter(t => t.type === "variableDeclaration")
        .map(t => t.variableName);
    return 1;
}

exports.allExpressionFinished = (ast) => {
    return 1;
}

exports.indentation = (ast) => {
    return 1;
}

exports.numberLine = (ast) => {
    return 1;
}