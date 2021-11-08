const { getTemplate } = require('../util/getTemplate.js');

export const exportTemplate = (exportBody) => {
    const template = getTemplate(exportBody.c1,
        exportBody.c2, 
        exportBody.c3, 
        exportBody.c4, 
        exportBody.c5, 
        exportBody.c6, 
        exportBody.c7, 
        exportBody.c8, 
        exportBody.c9, 
        exportBody.c10, 
        exportBody.c11, 
        exportBody.c12, 
        exportBody.c13, 
        exportBody.c14
    );

    return JSON.stringify(template, null, 4);
}
