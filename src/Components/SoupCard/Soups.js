import tomato from '../../SoupImages/tomato.png';
import skargard from '../../SoupImages/skargard.png';
import potato from '../../SoupImages/potato.png';
import lins from '../../SoupImages/lins.png';

export const soups = [
    {
        title: 'Tomatsoppa',
        infoText: 'Ät dig i form med våran supertomatsoppa 100% god!',
        image: tomato,
        ingredienser: ['Spenat', 'Tomat', 'Korriander', 'Linser'],
        nutritionl: [{Kalorier: '300', Protoin: '37g / 100g', Socker: '5g', Fett: '10g / 100g'}],
        pris: 90,
        id: 'Tomatsoppa',
        special: []
    },
    {
        title: 'Skärgårdssoppa',
        infoText: 'Krämig, smakrik soppa med smak av havet.',
        image: skargard,
        ingredienser: ['Spenat', 'Tomat', 'Korriander', 'Linser'],
        nutritionl: [{Kalorier: '300', Protoin: '37g / 100g', Socker: '5g', Fett: '10g / 100g'}],
        pris: 90,
        id: 'Skärgårdssoppa',
        special: []
    },
    {
        title: 'Potatis- och purjolöksoppa',
        infoText: 'För den jordnär. Mmmm potatis.',
        image: potato,
        ingredienser: ['Spenat', 'Tomat', 'Korriander', 'Linser'],
        nutritionl: [{Kalorier: '300', Protoin: '37g / 100g', Socker: '5g', Fett: '10g / 100g'}],
        pris: 80,
        id: 'Potatis- och purjolöksoppa',
        special: []
    },
    {
        title: 'Linssoppa',
        infoText: 'För den som tar soppa på allvar. Surpla på!',
        image: lins,
        ingredienser: ['Spenat', 'Tomat', 'Korriander', 'Linser'],
        nutritionl: [{Kalorier: '300', Protoin: '37g / 100g', Socker: '5g', Fett: '10g / 100g'}],
        pris: 80,
        id: 'Linssoppa',
        special: []
    }
]