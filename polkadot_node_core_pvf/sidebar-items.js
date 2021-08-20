initSidebarItems({"enum":[["InvalidCandidate","A description of an error raised during executing a PVF and can be attributed to the combination of the candidate [`polkadot_parachain::primitives::ValidationParams`] and the PVF."],["Priority","A priority assigned to execution of a PVF."],["ValidationError","A error raised during validation of the candidate."]],"fn":[["execute_worker_entrypoint","The entrypoint that the spawned execute worker should start with. The `socket_path` specifies the path to the socket used to communicate with the host."],["prepare_worker_entrypoint","The entrypoint that the spawned prepare worker should start with. The `socket_path` specifies the path to the socket used to communicate with the host."],["start","Start the validation host."]],"macro":[["decl_puppet_worker_main","Use this macro to declare a `fn main() {}` that will check the arguments and dispatch them to the appropriate worker, making the executable that can be used for spawning workers."]],"struct":[["Config","Configuration for the validation host."],["Metrics","Validation host metrics."],["Pvf","A struct that carries code of a parachain validation function and it’s hash."],["ValidationHost","A handle to the async process serving the validation host requests."]]});