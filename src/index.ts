import { augmentedFetch } from "./augmented-fetch.js"
import * as Alerts from "./endpoints/alerts.js"
import * as BuildPartsInformation from "./endpoints/build-parts-information.js"
import * as BuildUnit from "./endpoints/build-unit-status.js"
import * as Consumables from "./endpoints/consumables.js"
import * as DeviceAutomation from "./endpoints/device-automation.js"
import * as DeviceMaintenance from "./endpoints/device-maintenance.js"
import * as DeviceOps from "./endpoints/device-operations"
import * as GatewayApi from "./endpoints/gateway-api.js"
import * as Identity from "./endpoints/identity"
import * as JobInformation from "./endpoints/job-information.js"
import * as JobSubmission from "./endpoints/job-submission.js"
import * as Materials from "./endpoints/materials.js"
import * as ProcessDevelopment from "./endpoints/process-development.js"
import * as Security from "./endpoints/security.js"
import * as ServiceDiscovery from "./endpoints/service-discovery.js"
import * as StringResources from "./endpoints/string-resources.js"

export * from "./definitions/interfaces.js"

export class HPClient {
	protected _ccServerUrl: string = ""
	protected _baseUrl: string = ""
	protected _accessToken: string = ""

	constructor(ccServerUrl: string) {
		this._ccServerUrl = ccServerUrl
	}

	protected _fetch = augmentedFetch

	// Gateway API
	public login = GatewayApi.login
	public refreshToken = GatewayApi.refreshToken
	public devices = GatewayApi.devices

	// Service Discovery
	public deviceServiceDiscovery = ServiceDiscovery.deviceServiceDiscovery

	// String Resources
	public deviceStringResources = StringResources.deviceStringResources
	public deviceStringResource = StringResources.deviceStringResource

	// Identity and Capabilities
	public deviceIdentification = Identity.deviceIdentification

	// Materials
	public deviceMaterials = Materials.deviceMaterials
	public deviceMaterial = Materials.deviceMaterial

	// Job Submission
	public submitJob = JobSubmission.submitJob
	public submitJobBuildPackage = JobSubmission.submitJobBuildPackage

	// Job Submission
	public jobs = JobInformation.jobs
	public job = JobInformation.job
	public jobStatus = JobInformation.jobStatus
	public jobCompletionDetails = JobInformation.jobCompletionDetails
	public jobBuildPackageStatus = JobInformation.jobBuildPackageStatus
	public jobPartStatus = JobInformation.jobPartStatus

	// Status and Alerts
	public deviceStatus = Alerts.deviceStatus
	public deviceAlerts = Alerts.deviceAlerts

	// Build Unit Status and Information
	public deviceTrolley = BuildUnit.deviceTrolley
	public deviceTrolleys = BuildUnit.deviceTrolleys

	// Consumables
	public deviceAgents = Consumables.deviceAgents
	public deviceAgentSupply = Consumables.deviceAgentSupply
	public deviceAgentReservoirs = Consumables.deviceAgentReservoirs
	public devicePowderSupplies = Consumables.devicePowderSupplies
	public deviceHeaters = Consumables.deviceHeaters
	public deviceHeater = Consumables.deviceHeater
	public devicePrintHeads = Consumables.devicePrintHeads
	public devicePrintHead = Consumables.devicePrintHead
	public devicePowdertanks = Consumables.devicePowdertanks

	// Device Maintenance
	public deviceMaintenance = DeviceMaintenance.deviceMaintenance
	public filteredDeviceMaintenance = DeviceMaintenance.filteredDeviceMaintenance

	// Build Parts Information
	public buildPackages = BuildPartsInformation.buildPackages
	public buildPackage = BuildPartsInformation.buildPackage
	public buildPackageParts = BuildPartsInformation.buildPackageParts
	public buildPackageAssemblies = BuildPartsInformation.buildPackageAssemblies
	public jobParts = BuildPartsInformation.jobParts
	public jobPart = BuildPartsInformation.jobPart
	public buildPackageThumbnail = BuildPartsInformation.buildPackageThumbnail
	public partThumbnail = BuildPartsInformation.partThumbnail

	// Device Operations
	public deviceOperations = DeviceOps.deviceOperations
	public deviceOperation = DeviceOps.deviceOperation

	// Security
	public devicePublicKey = Security.devicePublicKey

	// Device Automation
	public startJob = DeviceAutomation.startJob
	public cancelJob = DeviceAutomation.cancelJob
	public deviceDoors = DeviceAutomation.deviceDoors
	public deviceDoor = DeviceAutomation.deviceDoor
	public updateDoor = DeviceAutomation.updateDoor
	public deviceSensors = DeviceAutomation.deviceSensors
	public deviceSensor = DeviceAutomation.deviceSensor

	// Process Development
	public buildPackageBinary = ProcessDevelopment.buildPackageBinary
	public startJobTelemetry = ProcessDevelopment.startJobTelemetry
	public jobTelemetry = ProcessDevelopment.jobTelemetry
	public sliceJob = ProcessDevelopment.sliceJob
	public jobSlices = ProcessDevelopment.jobSlices
	public startDeviceTelemetry = ProcessDevelopment.startDeviceTelemetry
	public deviceTelemetry = ProcessDevelopment.deviceTelemetry
}
