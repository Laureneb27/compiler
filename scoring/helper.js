exports.allDeclaredIsUsed = (ast) => {
    const variableDeclared = ast
        .filter(v => v.type === "variableDeclaration")
        .map(v => v.variableName);
    console.log('declare', variableDeclared)

    const variableUsed = ast
        .filter(v => v.type === "objectMethodCall")
        .reduce((acc, method) => {
            let argument = method.arguments;
            let name = "";
            for (let i = 0; i < argument.length; i++) {
                if (argument[i].variableName !== undefined) {
                    name = argument[i].variableName
                }
            }
            acc.push(name)
            return acc;
        }, [])
    console.log('use', variableUsed)

    const declareUsed = variableDeclared.filter((v) => variableUsed.includes(v));
    console.log('declareUsed', declareUsed)
    return variableDeclared.length - declareUsed.length;
}

exports.allUsedIsDeclared = (ast) => {

    const variableUsed = ast
        .filter(v => v.type === "objectMethodCall")
        .reduce((acc, method) => {
            let argument = method.arguments;
            let name = "";
            for (let i = 0; i < argument.length; i++) {
                if (argument[i].variableName !== undefined) {
                    name = argument[i].variableName
                }
            }
            acc.push(name)
            return acc;
        }, [])
    console.log('use', variableUsed)

    const variableDeclared = ast
        .filter(v => v.type === "variableDeclaration")
        .map(v => v.variableName);
    console.log('declare', variableDeclared)

    const variableAffected = ast
        .filter(t => t.type === "variableAffectation")
        .map(t => t.variableName);
    console.log('affected', variableAffected)
    const match = variableDeclared.filter((v) => variableAffected.includes(v));
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