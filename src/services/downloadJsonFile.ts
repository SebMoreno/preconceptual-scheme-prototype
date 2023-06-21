export function downloadJsonFile(content: object | unknown[], filename = "data.json") {
    const contenidoJSON = JSON.stringify(content, null, 2);
    const blob = new Blob([contenidoJSON], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    link.dispatchEvent(new MouseEvent('click'));
    URL.revokeObjectURL(url);
}
