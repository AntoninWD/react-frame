import React, {ComponentType} from 'react';

type Props = {
    componentConfig: {
        features: { name: string; enabled: boolean }[];
        renderer: ComponentType<any>;
    }
    BaseComponent: <T>(Component: ComponentType<T>) => any;
    featuresOptions?: { [key: string]: React.FC<any> };
};

const useFeatures = (props: Props) => {
    const { componentConfig, BaseComponent, featuresOptions } = props;
    const { features, renderer } = componentConfig;

    // Insert Renderer
    let Component = BaseInjector(renderer);

    // Make sure it has features options
    if (featuresOptions) {
        features.forEach(({ name, enabled }: { name: string; enabled: boolean }) => {
            if (featuresOptions[name] && enabled) {
                // Wrap base component with injected feature
                (Component as any) = featuresOptions[name](Component);
            }
        });
    }

    // Insert base here so features overwrite base methods and props
    Component = BaseComponent(Component);

    return Component;
};

export default useFeatures;


function BaseInjector<T extends  JSX.IntrinsicAttributes>(Renderer: ComponentType<T>) {
    return (props: T) => {
        return <Renderer {...props} />;
    };
}