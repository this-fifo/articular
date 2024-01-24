import { AdvancedModulationType } from '../interface/AdvancedModulationType'
import { FilterType } from '../interface/FilterType'
import { Module } from '../interface/Module'
import { Preset } from '../interface/Preset'
import { WaveForm } from '../interface/Waveform'

export const initPreset: Preset = {
    id: 'init',
    name: '- init -',
    options: {
        masterGain: 0.75,
        noise: {
            enabled: false,
            enableRoutingFX: false,
            enableRoutingFilter: false,
            noise: {
                type: 'pink',
            },
            pan: 0,
            envelope: {
                attack: 0.1,
                decay: 0.1,
                sustain: 1,
                attackCurve: 'linear',
                release: 0.1,
                releaseCurve: 'linear',
            },
            volume: 0.1,
        },
        sub: {
            enabled: false,
            oscillator: {
                type: 'sine',
            },
            envelope: {
                attack: 1,
                decay: 0.2,
                sustain: 0.85,
                release: 0.8,
            },
            octave: -2,
            pan: 0,
            waveForm: WaveForm.SINE,
            detune: 0,
            volume: 0.5,
            enableRoutingFX: false,
            enableRoutingFilter: false,
        },
        oscA: {
            enabled: true,
            enableRoutingFX: true,
            enableRoutingFilter: true,
            pan: 0,
            envelope: {
                attack: 0,
                decay: 0.2,
                sustain: 0.85,
                release: 0,
            },
            octave: 0,
            spread: 0,
            unison: 0,
            modulationIndex: 0,
            harmonicity: 0.5,
            advancedModulationType: AdvancedModulationType.NONE,
            subModulationType: WaveForm.SQUARE,
            detune: 0,
            waveTablePosition: 0,
            waveForm: WaveForm.SAWTOOTH,
            oscillator: {
                type: 'sawtooth',
                phase: 0,
            },
            volume: 0.7,
        },
        oscB: {
            enabled: false,
            enableRoutingFX: true,
            enableRoutingFilter: true,
            pan: 0,
            octave: 0,
            unison: 0,
            envelope: {
                attack: 1,
                decay: 0.2,
                sustain: 0.85,
                release: 0.8,
            },
            modulationIndex: 0,
            harmonicity: 1,
            advancedModulationType: AdvancedModulationType.FAT,
            subModulationType: WaveForm.SQUARE,
            detune: -2,
            waveTablePosition: 0,
            spread: -3,
            waveForm: WaveForm.SAWTOOTH,
            oscillator: {
                type: 'sawtooth',
                phase: 0,
            },
            volume: 0.5,
        },
        metal: {
            enabled: false,
            enableRoutingFX: false,
            enableRoutingFilter: false,
            detune: 0,
            pan: 0,
            envelope: {
                attack: 1,
                decay: 0.2,
                sustain: 0.85,
                release: 0.8,
            },
            harmonicity: 0.5,
            modulationIndex: 0,
            octaves: 3,
            volume: 0.2,
        },
        pluck: {
            enabled: false,
            enableRoutingFX: false,
            enableRoutingFilter: false,
            pan: 0,
            envelope: {
                attack: 1,
                decay: 0.2,
                sustain: 0.85,
                release: 3,
            },
            attackNoise: 1,
            dampening: 4000,
            release: 2,
            octave: 0,
            resonance: 1,
            volume: 0.4,
        },
        lfo1: {
            enabled: true,
            frequency: 2.03,
            min: 200,
            max: 800,
        },
        lfo2: {
            enabled: true,
            frequency: 4.62,
            min: 400,
            max: 1000,
        },
        lfo3: {
            enabled: true,
            frequency: 0.1,
            min: 1,
            max: 100,
        },
        lfo4: {
            enabled: true,
            frequency: 0.1,
            min: 1,
            max: 100,
        },
        matrix: {
            routes: [],
        },
        effectRack: {
            enabled: true,
            volume: 1,
            modules: [
                {
                    name: 'reverb',
                    label: 'ᚡ Conv Reverb',
                    enabled: false,
                    config: {},
                    index: 0,
                },
                {
                    name: 'compressor',
                    label: 'ᛞ Compressor',
                    enabled: false,
                    config: {},
                    index: 1,
                },
                {
                    name: 'distortion',
                    label: 'ᚣ Amp Distortion',
                    enabled: false,
                    config: {},
                    index: 2,
                },
                {
                    name: 'wah',
                    label: 'ᛉ Wah',
                    enabled: false,
                    config: {},
                    index: 3,
                },
                {
                    name: 'bitcrusher',
                    label: 'ᛔ BitCrusher',
                    enabled: false,
                    config: {},
                    index: 4,
                },
                {
                    name: 'chebyshev',
                    label: 'ᛈ Cheby Distortion',
                    enabled: false,
                    config: {},
                    index: 5,
                },
                {
                    name: 'chorus',
                    label: 'ᛰ Chorus',
                    enabled: false,
                    config: {},
                    index: 6,
                },
                {
                    name: 'feedbackdelay',
                    label: 'ᛨ Feedback Delay',
                    enabled: false,
                    config: {},
                    index: 7,
                },
                {
                    name: 'freeverb',
                    label: 'ᚠ FreeVerb',
                    enabled: false,
                    config: {},
                    index: 8,
                },
                {
                    name: 'jcreverb',
                    label: 'ᚥ JCReverb',
                    enabled: false,
                    config: {},
                    index: 9,
                },
                {
                    name: 'frequencyshifter',
                    label: 'ᛇ FreqShifter',
                    enabled: false,
                    config: {},
                    index: 10,
                },
                {
                    name: 'phaser',
                    label: 'ᚹ Phaser',
                    enabled: false,
                    config: {},
                    index: 11,
                },
                {
                    name: 'pingpongdelay',
                    label: 'ᛵ PingPongDelay',
                    enabled: false,
                    config: {},
                    index: 12,
                },
                {
                    name: 'pitchshift',
                    label: 'ᚦ PitchShifter',
                    enabled: false,
                    config: {},
                    index: 13,
                },
                {
                    name: 'stereowidener',
                    label: 'ᛸ StereoWidener',
                    enabled: false,
                    config: {},
                    index: 14,
                },
                {
                    name: 'tremolo',
                    label: 'ᛠ Tremolo',
                    enabled: false,
                    config: {},
                    index: 15,
                },
                {
                    name: 'vibrato',
                    label: 'ᚸ Vibrato',
                    enabled: false,
                    config: {},
                    index: 16,
                },
                {
                    name: 'eq3',
                    label: 'ᛊ EQ3',
                    enabled: false,
                    config: {},
                    index: 17,
                },
            ],
        },
        masterFilter: {
            enabled: false,
            volume: 1,
            drive: 0,
            resonance: 1,
            cutoff: 420,
            detune: 0,
            rolloff: -12,
            type: FilterType.LOWPASS,
        },
        voicing: {
            glide: 0.1,
        },
    },
}
