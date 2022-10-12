import React from 'react';
import './info.css';

export default function InfoTopMenu() {
    return (
        <div className="info_top_menu">
            <div className="info_top_menu__left">
                <span>Grozny</span>
            </div>
            <div className="info_top_menu__right">
                <div className='item'>
                    <span>Free shipping</span>
                    <span className='tip-1'>
                        <p>Use contactless shipping</p>
                        <p>More ...</p>
                    </span>
                </div>
                <div className='item'>
                    <span>Pay when you want</span>
                    <span className='tip-1'>
                        <p>Tip2</p>
                        <p>More ...</p>
                    </span>
                </div>
                <div className='item'>
                    <span>How we work now</span>
                    <span className='tip-1'>
                        <p>Tip3</p>
                        <p>More ...</p>
                    </span>
                </div>
            </div>
        </div>
    )
}