import {
    useHMSStore,
    useHMSActions,
    selectIsLocalAudioPluginPresent
} from '@100mslive/hms-video-react';
import { HMSNoiseSuppressionPlugin } from '@100mslive/hms-noise-suppression';

import { Button } from 'antd';
export default function NoiseSuppression() {
    const noiseSuppressionPlugin = new HMSNoiseSuppressionPlugin(10);

    const isNoiseSuppressed = useHMSStore(selectIsLocalAudioPluginPresent(noiseSuppressionPlugin.getName()))
    const hmsActions = useHMSActions();

    const toggleNoiseSuppression = async () => {
        try {
            if (!isNoiseSuppressed) {
                // add background noise suppression
                await hmsActions.addPluginToAudioTrack(noiseSuppressionPlugin);
            } else {
                // remove background noise suppression
                await hmsActions.removePluginFromAudioTrack(noiseSuppressionPlugin);
            }
        } catch (err) {
            console.log('noise suppression failure - ', isNoiseSuppressed, err);
        }
    }
    return <Button onClick={toggleNoiseSuppression} />

}
