function byTagName(node, tagName) {
    function checkTagName(node) {
        return(node.nodeType == document.ELEMENT_NODE && node.tagName == tagName.toUpperCase());
    }

    var matches = [];
    if (checkTagName(node)) matches.push(node);

    node.childNodes.forEach(function(childNode) {
        matches = matches.concat(byTagName(childNode, tagName));
    });

    
    return matches;
}