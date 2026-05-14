const getValue = (kind: string | number) => {
    if (typeof kind === 'string') {
        return `The value type is ${kind}`
    }
    return `the value type is ${kind}`
}


function orderKey(size: 'small' | 'medium' | 'large' | number){
    if(size === 'small'){
        return `small size key`
    }
    if(size === 'medium' || 'large'){
        return 'size is extra big'
    }
    return `the size is ${size}`
}