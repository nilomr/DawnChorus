import React from 'react';
import ReactDOM from 'react-dom';

import { RenderParameters } from '../spectrogram-render';

import generateSettingsContainer from './SettingsContainer';

export default function initialiseControlsUi(
    container: Element,
    props: {
        stopCallback: () => void;
        renderParametersUpdateCallback: (settings: Partial<RenderParameters>) => void;
        renderFromFileCallback: (file: ArrayBuffer) => void;
    }
) {
    const [SettingsContainer, setPlayState] = generateSettingsContainer();

    ReactDOM.render(
        <SettingsContainer
            onStop={props.stopCallback}
            onRenderParametersUpdate={props.renderParametersUpdateCallback}
            onRenderFromFile={props.renderFromFileCallback}
        />,
        container
    );

    return setPlayState;
}
