import React from "react";
import { ReactSVG } from "react-svg";

interface IconProps {
    name: string,
    color?: string,
    size?: number
}

function Icon({ name, color = 'inherit', size = 16 }: IconProps) {
    const injectStyles = (svg: Element) => {
        svg.setAttribute('style', `
            fill: ${color};
            height: ${size}px;
            width: ${size}px;
        `)
    }

    return (
        <ReactSVG
            src={`/src/assets/icons/${name}.svg`}
            beforeInjection={injectStyles}
        />
    );
}

export default Icon;
