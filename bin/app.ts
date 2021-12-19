#!/usr/bin/env node
import 'source-map-support/register';
import { ExampleStack } from '../lib/example-stack';
import {App} from "aws-cdk-lib";

const app = new App();

new ExampleStack(app, 'example-stack')
