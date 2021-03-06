import { extend } from 'vega-util';
export * from 'vega-util';
import { transforms } from 'vega-dataflow';
export { Dataflow, EventStream, MultiPulse, Operator, Parameters, Pulse, Transform, changeset, definition, ingest, isTuple, transform, transforms, tupleid } from 'vega-dataflow';
import * as tx from 'vega-transforms';
import * as vtx from 'vega-view-transforms';
import * as encode from 'vega-encode';
import * as geo from 'vega-geo';
import * as force from 'vega-force';
import * as tree from 'vega-hierarchy';
import * as label from 'vega-label';
import * as reg from 'vega-regression';
import * as voronoi from 'vega-voronoi';
import * as wordcloud from 'vega-wordcloud';
import * as xf from 'vega-crossfilter';
export * from 'vega-statistics';
export * from 'vega-time';
export * from 'vega-loader';
export * from 'vega-scenegraph';
export { interpolate, interpolateColors, interpolateRange, quantizeInterpolator, scale, scheme } from 'vega-scale';
export { projection } from 'vega-projection';
export { View } from 'vega-view';
export { defaultLocale, numberFormatDefaultLocale as formatLocale, locale, resetDefaultLocale, timeFormatDefaultLocale as timeFormatLocale } from 'vega-format';
export { expressionFunction } from 'vega-functions';
export { parse } from 'vega-parser';
export { context as runtimeContext } from 'vega-runtime';
export { codegen as codegenExpression, parse as parseExpression } from 'vega-expression';
export { selector as parseSelector } from 'vega-event-selector';

var name = "vega";
var version = "5.19.1";
var description = "The Vega visualization grammar.";
var keywords = [
	"vega",
	"visualization",
	"interaction",
	"dataflow",
	"library",
	"data",
	"d3"
];
var license = "BSD-3-Clause";
var author = "UW Interactive Data Lab (http://idl.cs.washington.edu)";
var main = "build/vega-node.js";
var module = "build/vega.module.js";
var unpkg = "build/vega.min.js";
var jsdelivr = "build/vega.min.js";
var types = "index.d.ts";
var repository = "vega/vega";
var scripts = {
	bundle: "rollup -c --config-bundle",
	prebuild: "rimraf build && rimraf build-es5",
	build: "rollup -c --config-core --config-bundle --config-ie",
	postbuild: "node schema-copy",
	pretest: "yarn build --config-test",
	test: "TZ=America/Los_Angeles tape 'test/**/*-test.js'",
	prepublishOnly: "yarn test && yarn build",
	postpublish: "./schema-deploy.sh"
};
var dependencies = {
	"vega-crossfilter": "~4.0.5",
	"vega-dataflow": "~5.7.3",
	"vega-encode": "~4.8.3",
	"vega-event-selector": "~2.0.6",
	"vega-expression": "~4.0.1",
	"vega-force": "~4.0.7",
	"vega-format": "~1.0.4",
	"vega-functions": "~5.12.0",
	"vega-geo": "~4.3.8",
	"vega-hierarchy": "~4.0.9",
	"vega-label": "~1.0.0",
	"vega-loader": "~4.4.0",
	"vega-parser": "~6.1.3",
	"vega-projection": "~1.4.5",
	"vega-regression": "~1.0.9",
	"vega-runtime": "~6.1.3",
	"vega-scale": "~7.1.1",
	"vega-scenegraph": "~4.9.3",
	"vega-statistics": "~1.7.9",
	"vega-time": "~2.0.4",
	"vega-transforms": "~4.9.3",
	"vega-typings": "~0.19.2",
	"vega-util": "~1.16.0",
	"vega-view": "git+https://github.com/wtong2017/vega-view.git",
	"vega-view-transforms": "~4.5.8",
	"vega-voronoi": "~4.1.5",
	"vega-wordcloud": "~4.1.3"
};
var devDependencies = {
	"vega-schema": "*"
};
var pkg = {
	name: name,
	version: version,
	description: description,
	keywords: keywords,
	license: license,
	author: author,
	main: main,
	module: module,
	unpkg: unpkg,
	jsdelivr: jsdelivr,
	types: types,
	repository: repository,
	scripts: scripts,
	dependencies: dependencies,
	devDependencies: devDependencies
};

// -- Transforms -----
extend(transforms, tx, vtx, encode, geo, force, label, tree, reg, voronoi, wordcloud, xf); // -- Exports -----

const version$1 = pkg.version;

export { version$1 as version };
