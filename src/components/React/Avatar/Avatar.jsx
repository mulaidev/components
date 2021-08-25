import React from 'react'

function Avatar(props) {
    const {images, small, medium, circle, round, badge, time, isActive} = props;
    
    const classAvatar =["inline-block object-cover"];

    const classList = {
        roundedFull: "rounded-full",
        rounded: "rounded-md",
        small: "w-12 h-12",
        medium: "w-18 h-18",
    }

    // Append Size Class
    if (small){
        classAvatar.push(classList.small)
    } else if (medium){
        classAvatar.push(classList.medium)
    } else {
        classAvatar.push(classList.small)
    }

    // Append Type Class
    if (!round || circle){
        classAvatar.push(classList.roundedFull)
    } else if (round){
        classAvatar.push(classList.rounded)
    }

    return (
        <div >
            <img class={classAvatar.join(" ")} src={images} alt="avatar" />
            {badge && <span class="inline-block items-center justify-center px-2 py-1 text-xs font-regular leading-none text-white bg-red-500 border-2 border-white rounded-full">{time}</span>}
            {isActive && <span class="absolute bottom-1 right-1 inline-block w-5 h-5 bg-green-600 border-2 border-white rounded-full"></span>}
        </div>
    )
}

export default Avatar
