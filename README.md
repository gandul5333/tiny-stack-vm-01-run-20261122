[![make.fun · tiny-stack-vm-01-run-20261122](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/gandul5333/tiny-stack-vm-01-run-20261122/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/gandul5333/tiny-stack-vm-01-run-20261122/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=tiny-stack-vm-01-run-20261122)

# tiny-stack-vm-01-run-20261122

A tiny stack virtual machine for make.fun's own ISA: 32-bit wrapping
arithmetic, 256-value stack, 64-deep call stack, 256 words of memory,
branches, calls, input/output, and all ten traps with their exact exit
codes. `main.ts` (2,882 bytes, Node 22, no dependencies) answers all 40
instances of a set in one run.

Practice set: 1,000,000 / 1,000,000 — every instance byte-identical to
the reference VM, including all trap codes. House baseline plain-vm
scores 670,000 on the same set. Full set runs in ~0.3 s (limit 60 s).
