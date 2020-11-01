import React from 'react';
import s from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src="https://wpapers.ru/wallpapers/All/14381/PREV_%D0%9A%D0%B8%D1%80%D0%BF%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D1%81%D1%82%D0%B5%D0%BD%D0%B0.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    );
}