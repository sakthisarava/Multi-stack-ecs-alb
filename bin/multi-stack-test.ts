#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MultiStackTestStack } from '../lib/multi-stack-test-stack';
import { EcsStack } from '../lib/ecs-stack';

const app = new cdk.App();
const stack1 = new MultiStackTestStack(app, 'MultiStackTestStack');
  
new EcsStack(app, 'EcsStack', {
    vpc: stack1.vpc,
});