import dynamic from 'next/dynamic';
const DynamicComponent = dynamic(()=>import(`../components/hello`), {
    loadableGenerated: {
        modules: [
            "src/some-file.js -> " + "../components/hello"
        ]
    }
});
const componentRoot = '@/some-components';
const Component1 = dynamic(()=>import(`${componentRoot}/component1`));
const Component2 = dynamic(()=>import(`${componentRoot}/component2`));
