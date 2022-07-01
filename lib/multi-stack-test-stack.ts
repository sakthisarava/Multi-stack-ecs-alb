import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
// import * as ecs from '@aws-cdk/aws-ecs';
// import * as iam from '@aws-cdk/aws-iam';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
// import * as ecs from '@aws-cdk/aws-ecs';
// import * as iam from '@aws-cdk/aws-iam';
// import * as ecs_patterns from '@aws-cdk/aws-ecs-patterns';


/**
 * This the export class of the MultiStackTestStack
 */
export class MultiStackTestStack extends cdk.Stack {

  public readonly vpc: ec2.Vpc

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    
    /**
     * Create a new VPC with single NAT Gateway
     */
     this.vpc = new ec2.Vpc(this, 'ecs-cdk-vpc', {
      cidr: '10.0.0.0/16',
      maxAzs: 2,
      subnetConfiguration: [
        {
          name: 'private-subnet-1',
          subnetType: ec2.SubnetType.PRIVATE,
          cidrMask: 24,
        },
        {
          name: 'public-subnet-1',
          subnetType: ec2.SubnetType.PUBLIC,
          cidrMask: 24,
        }
      ]
    });

//   }
// }

// export class EcsStack extends cdk.Stack {
//   constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
//     super(scope, id, props);
 
//  ***ECS Contructs***

//    const vpc = new ec2.Vpc(this, 'ecs-cdk-vpc', {
//     cidr: '10.0.0.0/16',
//     maxAzs: 1
//   });
  

/**
 * Create the ecs cluster using our custom vpc
 */
//   const cluster = new ecs.Cluster(this, "ecs-cluster", {
//       vpc: vpc,
//     });

//     /**
//      * Create new IAM taskRole 
//      */
//     const taskRole = new iam.Role(this, `ecs-taskRole-${this.stackName}`, {
//       roleName: `ecs-taskRole-${this.stackName}`,
//       assumedBy: new iam.ServicePrincipal('ecs-tasks.amazonaws.com')
//     });

//     const executionRolePolicy =  new iam.PolicyStatement({
//       effect: iam.Effect.ALLOW,
//       resources: ['*'],
//       actions: [
//                 "ecr:GetAuthorizationToken",
//                 "ecr:BatchCheckLayerAvailability",
//                 "ecr:GetDownloadUrlForLayer",
//                 "ecr:BatchGetImage",
//                 "logs:CreateLogStream",
//                 "logs:PutLogEvents"
//             ]
//     });

//     const taskDef = new ecs.FargateTaskDefinition(this, "ecs-taskdef", {
//       taskRole: taskRole
//     });

//     taskDef.addToExecutionRolePolicy(executionRolePolicy);

//     const container = taskDef.addContainer('flask-app', {
//       image: ecs.ContainerImage.fromRegistry("nginx"),
//       memoryLimitMiB: 256,
//       cpu: 256,
//     });

//     container.addPortMappings({
//       containerPort: 5000,
//       protocol: ecs.Protocol.TCP
//     });

//     const fargateService = new ecs_patterns.ApplicationLoadBalancedFargateService(this, "ecs-service", {
//       cluster: cluster,
//       taskDefinition: taskDef,
//       publicLoadBalancer: true,
//       desiredCount: 3,
//       listenerPort: 80
//     });

//     const scaling = fargateService.service.autoScaleTaskCount({ maxCapacity: 6 });
//     scaling.scaleOnCpuUtilization('CpuScaling', {
//       targetUtilizationPercent: 10,
//       scaleInCooldown: cdk.Duration.seconds(60),
//       scaleOutCooldown: cdk.Duration.seconds(60)
//     });

  }
}