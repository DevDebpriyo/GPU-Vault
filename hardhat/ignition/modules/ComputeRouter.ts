import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

/**
 * @title ComputeRouterModule
 * @notice Hardhat Ignition deployment module for ComputeRouter
 * @dev Deploys the ComputeRouter contract with NO parameters required
 * 
 * No constructor parameters needed! Agent can be set later via setInitialAgent().
 * submitJob() is open to all users.
 * 
 * Deploy command:
 * ```bash
 * npx hardhat ignition deploy --network adiTestnet ignition/modules/ComputeRouter.ts
 * ```
 * 
 * After deployment, update the contract address in:
 * - offchain/src/lib/contracts/compute-router.ts (COMPUTE_ROUTER_ADDRESS)
 */
export default buildModule("ComputeRouterModule", (m) => {
  // No parameters - zero argument constructor
  const computeRouter = m.contract("ComputeRouter");

  return { computeRouter };
});