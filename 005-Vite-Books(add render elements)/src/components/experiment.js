const fruit = {
    color: 'red',
    name: 'apple'
};


const updatedFruit = (color) => {
    const obejctUpdated = 
    {
        ...fruit,
        color: color,
        name: 'orange',
        storage: 'wharehouse'
    };

    return obejctUpdated;
};

fruit.color = 'yelow'
    
console.log(updatedFruit('brown'));

console.log(fruit);

console.log(Math.round(Math.random()*9999));