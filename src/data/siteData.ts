export const siteConfig = {
  name: "Jeremy Lien",
  role: "Computer Science & Electrical Engineering",
  tagline:
    "I design high-performance digital systems — from custom VLSI silicon to GPU-accelerated software.",
  email: "jjlien@umich.edu",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/jjlien3090",
    linkedin: "https://linkedin.com/in/jjlien",
  },
};

export const aboutText = `I'm a Computer Science student at the University of Michigan with a minor in Electrical Engineering, passionate about the intersection of hardware and software. From designing full-custom VLSI microprocessors at the transistor level to building GPU-accelerated 3D visualization engines, I love turning complex architectures into working silicon and production-quality code.

My work spans RTL design and FPGA prototyping, cycle-accurate behavioral simulation in C, and interactive scientific visualization with PyTorch. As an undergraduate researcher in UMich's Climate and Space Sciences department, I engineered tools to visualize Martian surface topography at planetary scale.`;

export interface Skill {
  name: string;
  category: "Hardware" | "Software" | "Tools" | "Languages";
}

export const skills: Skill[] = [
  { name: "VLSI Design", category: "Hardware" },
  { name: "CMOS Layout", category: "Hardware" },
  { name: "FPGA (DE2-115)", category: "Hardware" },
  { name: "RTL Design", category: "Hardware" },
  { name: "Digital Logic", category: "Hardware" },
  { name: "DRC / LVS / PEX", category: "Hardware" },
  { name: "Place & Route", category: "Hardware" },
  { name: "DFT / Scan Chain", category: "Hardware" },
  { name: "Python", category: "Languages" },
  { name: "C / C++", category: "Languages" },
  { name: "Rust", category: "Languages" },
  { name: "Verilog / VHDL", category: "Languages" },
  { name: "HTML / CSS", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "MATLAB", category: "Languages" },
  { name: "Cadence Virtuoso", category: "Tools" },
  { name: "Quartus", category: "Tools" },
  { name: "Altium Designer", category: "Tools" },
  { name: "ROS2", category: "Tools" },
  { name: "Git", category: "Tools" },
  { name: "PyTorch", category: "Software" },
  { name: "NumPy / Pandas", category: "Software" },
  { name: "Matplotlib", category: "Software" },
  { name: "Tkinter / PIL", category: "Software" },
  { name: "VisPy", category: "Software" },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    role: "BS Computer Science, Minor in Electrical Engineering",
    company: "University of Michigan",
    period: "Aug 2024 — May 2028",
    bullets: [
      "Relevant Coursework: VLSI Design I, Computer Organization, Quantum Computing, Data Structures & Algorithms, Digital Integrated Circuits, Logic Design.",
    ],
    techStack: ["Verilog", "C / C++", "Python", "MATLAB"],
  },
  {
    role: "Undergraduate Student Researcher",
    company: "UMich Climate and Space Sciences Department",
    period: "Aug 2024 — May 2025",
    bullets: [
      "Engineered a desktop application with GUI (Tkinter, PIL, VisPy, Matplotlib) to visualize Martian surface topography (up to 18,575,000 square miles) leveraging voxel-based 3D rendering and processing.",
      "Engineered a GPU-accelerated 3D visualization engine using PyTorch tensors and VisPy, enabling interactive exploration of Martian terrain and reducing rendering time by 75%.",
    ],
    techStack: ["Python", "PyTorch", "Matplotlib", "Tkinter", "VisPy"],
  },
  {
    role: "Finance Chair",
    company: "Taiwanese Student Association",
    period: "Aug 2024 — Present",
    bullets: [
      "Raised $5,000+ in sponsorships and donations by running targeted outreach; created monthly newsletter program to maintain engagement and keep alumni connected.",
      "Managed finances for large-scale events with $3,500+ spend and 500+ attendees, coordinating purchase orders, vendor payments, and reimbursements.",
    ],
    techStack: ["Leadership", "Finance", "Event Planning"],
  },
];

export interface ProjectModule {
  name: string;
  description: string;
  bullets: string[];
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  overview: string;
  category: string;
  techStack: string[];
  specs: ProjectSpec[];
  highlights: string[];
  modules: ProjectModule[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: "risc-microprocessor",
    title: "16-Bit RISC Microprocessor",
    category: "VLSI",
    description:
      "Full-custom VLSI design of a 16-bit RISC microprocessor in TSMC 65nm targeting 400MHz, built from transistor-level up to a fully integrated datapath.",
    overview:
      "This project involves the full-custom VLSI design of a 16-bit RISC microprocessor using the TSMC 65nm process node. The design targets a 400MHz clock frequency (2.5ns cycle period) and was built from the transistor level up to a fully integrated datapath. The architecture supports a baseline ISA of 19 instructions, verified through extensive NCVerilog functional simulations. All modules achieved clean DRC/LVS reports with post-parasitic extraction (PEX) timing analysis confirming critical paths fit within the 2.5ns timing budget.",
    techStack: [
      "TSMC 65nm",
      "Cadence Virtuoso",
      "NCVerilog",
      "Custom Layout",
      "SAPR",
    ],
    specs: [
      { label: "Process Node", value: "TSMC 65nm CMOS" },
      { label: "Target Frequency", value: "400 MHz" },
      { label: "Word Size", value: "16-bit" },
      { label: "ISA", value: "19 Instructions" },
      { label: "Cycle Period", value: "2.5 ns" },
      { label: "Verification", value: "Clean DRC/LVS + PEX" },
    ],
    highlights: [
      "693ps post-PEX ALU rise delay",
      "87ps write / 60ps read register file timing",
      "O(log N) carry computation via Brent-Kung tree",
      "4× wire delay reduction with centered master-latch RF layout",
      "All 19 instructions verified including LOAD/STORE",
    ],
    modules: [
      {
        name: "Brent-Kung Parallel Prefix ALU",
        description:
          "High-speed ALU supporting ADD, SUB, AND, OR, XOR, and CMP with logarithmic carry computation.",
        bullets: [
          "Brent-Kung tree for O(log N) gate depth, replacing ripple-carry",
          "Post-PEX rise delay of 693ps",
          "Integrated PSR flag generation: Overflow (F), Zero (Z), Negative (N)",
        ],
      },
      {
        name: "16×16 Register File",
        description:
          "16-word, 16-bit register file with 1 write port and 2 independent read ports.",
        bullets: [
          "Centered master latches reduce worst-case RC wire delay by ~4×",
          "Transmission-gate bus architecture with keeper latches",
          "Post-PEX write delay of 87ps, read delay of 60ps",
        ],
      },
      {
        name: "Logarithmic Barrel Shifter",
        description:
          "4-stage logarithmic shifter capable of 0–15 bit left shifts in a single clock cycle.",
        bullets: [
          "Multiplexer-based stages (shifts of 8, 4, 2, 1) using transmission gates",
          "Intermediate buffering and keepers for rail-to-rail signal integrity",
        ],
      },
      {
        name: "Scannable Program Counter",
        description:
          "Synthesized PC unit with internal branch target calculation (PC + 1 + displacement).",
        bullets: [
          "Scan-chain flip-flops integrated for Design for Testability (DFT)",
          "APR floorplan optimized from 22×22μm to 26×26μm to resolve routing congestion",
          "Timing reduced from 1.5× to 0.7× the clock period",
        ],
      },
      {
        name: "Datapath Integration & Timing",
        description:
          "Unified assembly of RF, ALU, Shifter, and DMEM with full timing closure.",
        bullets: [
          "All 19 instructions verified in NCVerilog including complex LOAD/STORE",
          "Extracted integrated load capacitances back-annotated into module simulations",
          "Total critical path fits within the 2.5ns timing budget",
        ],
      },
    ],
    image: "/projects/risc-microprocessor.png",
  },
  {
    slug: "four-function-calculator",
    title: "11-Bit Four-Function Calculator",
    category: "FPGA",
    description:
      "Digital calculator on a DE2-115 FPGA featuring Booth's Multiplication, Restoring Division, and a 21-state FSM with a shared Add/Sub unit.",
    overview:
      "This project involves the design and implementation of a digital calculator on a DE2-115 FPGA. The system features a structured FSM+Datapath architecture that manages arithmetic operations for 11-bit signed numbers. It highlights complex hardware algorithms, such as Booth's Multiplication and Restoring Division, while prioritizing resource efficiency through a single shared Add/Subtract unit.",
    techStack: [
      "Verilog",
      "DE2-115 FPGA",
      "ModelSim",
      "Quartus",
      "7-Segment Display",
    ],
    specs: [
      { label: "Operand Width", value: "11-bit Signed" },
      { label: "Representation", value: "TC ↔ SM Conversion" },
      { label: "FSM States", value: "21 States (5-bit)" },
      { label: "ALU Sharing", value: "Single AddSub Unit" },
      { label: "Target", value: "DE2-115 FPGA" },
      { label: "Clock", value: "50MHz → ~12Hz Divider" },
    ],
    highlights: [
      "Booth's Algorithm reduces multiplication to ⌈log₂W⌉ = 4 iterations",
      "23-bit product register for full signed multiplication precision",
      "Hardware-level divide-by-zero detection with immediate overflow state",
      "Single shared AddSub unit minimizes FPGA area",
      "Sticky overflow state (XOver) across all arithmetic paths",
    ],
    modules: [
      {
        name: "Booth's Multiplication Unit",
        description:
          "Signed multiplication engine using Booth's Algorithm for efficient iterative computation.",
        bullets: [
          "Reduces iterations to 4 steps (⌈log₂W⌉) for 11-bit operands",
          "23-bit (2W+1) product register for precision and sign management",
          "Examines last two bits to decide add, subtract, or shift",
        ],
      },
      {
        name: "Restoring Division Unit",
        description:
          "Iterative division loop that calculates quotients through repeated subtraction.",
        bullets: [
          "Converts operands to absolute values before division loop",
          "QCounter increments for each successful subtraction step",
          "XOR-based sign correction for final result",
          "Hardware divide-by-zero check triggers immediate overflow",
        ],
      },
      {
        name: "Shared Resource Architecture",
        description:
          "Time-multiplexed AddSub unit shared across all four arithmetic operations.",
        bullets: [
          "FSM sequences data from Accumulator, Input Latch, and Product Register",
          "Drives control signals: LD_A, SEL_P, c0 (add/subtract mode)",
          "Sticky overflow state (XOver) requires manual user reset",
        ],
      },
      {
        name: "FSM Controller & I/O",
        description:
          "21-state controller orchestrating the complete data flow from input to result display.",
        bullets: [
          "States from XInit to XResult manage full operation lifecycle",
          "SW[10:0] switches for 11-bit input; HEX displays for decimal output",
          "Custom clock divider from 50MHz to ~12Hz for human interaction",
          "Comprehensive testbench covers corner cases and large-scale operations",
        ],
      },
    ],
    image: "/projects/four-function-calculator.png",
  },
  {
    slug: "lc2k-simulator",
    title: "LC-2K ISA & Simulator",
    category: "ISA",
    description:
      "Complete software toolchain for the LC-2K RISC architecture — a C-based behavioral simulator and two-pass assembler for an 8-register, 32-bit machine.",
    overview:
      "This project involved developing a complete software toolchain for the LC-2K, an 8-register, 32-bit RISC architecture. I authored a C-based simulator to model the architectural state (registers, memory, and program counter) and an assembler to translate human-readable assembly code into machine-executable binary. The system was stress-tested with complex recursive programs including an nCr calculator with full stack discipline.",
    techStack: ["C", "LC-2K Assembly", "GCC", "GDB", "Make"],
    specs: [
      { label: "Architecture", value: "32-bit RISC" },
      { label: "Registers", value: "8 GP (reg0 = 0)" },
      { label: "Memory", value: "65,536 Words" },
      { label: "Instruction Types", value: "R / I / J / O" },
      { label: "Instructions", value: "add, nor, lw, sw, beq, jalr, halt, noop" },
      { label: "Assembler", value: "Two-Pass with Symbol Table" },
    ],
    highlights: [
      "Cycle-accurate fetch-decode-execute simulation loop",
      "Two-pass assembler with full symbol table resolution",
      "16-bit sign-extension for I-Type immediates",
      "Recursive nCr calculator for stack-frame verification",
      "Full state dump after every instruction for debugging",
    ],
    modules: [
      {
        name: "Behavioral Software Simulator",
        description:
          "Cycle-accurate C simulator executing LC-2K machine code with full state tracking.",
        bullets: [
          "Tracks PC, 8-element register file, and 65K-word memory array",
          "Fetch-decode-execute loop parses 32-bit instructions",
          "Handles sign-extension for 16-bit immediates",
          "Outputs full state dump (registers + memory) after every instruction",
        ],
      },
      {
        name: "Two-Pass Assembler",
        description:
          "Translation tool bridging assembly language to binary machine code.",
        bullets: [
          "Two-pass system for symbolic label resolution",
          "Error handling for undefined labels, duplicates, and out-of-range immediates",
          "Supports .fill directives for memory initialization",
        ],
      },
      {
        name: "Program Verification",
        description:
          "Complex assembly programs stress-testing the ISA's handling of recursion and stack frames.",
        bullets: [
          "Recursive Combinations (nCr) calculator with deep recursion",
          "Manual stack pointer manipulation for return addresses and locals",
          "Efficient subroutines via jalr; bitwise ops via nor",
        ],
      },
    ],
    image: "/projects/lc2k-simulator.png",
  },
  {
    slug: "martian-topography",
    title: "Martian Topography Generator",
    category: "Data Viz",
    description:
      "GPU-accelerated pipeline transforming raw MOLA laser altimeter data into interactive 3D topography tensors with a PyTorch processing engine and Matplotlib voxel viewer.",
    overview:
      "This project is a sophisticated data-processing pipeline that transforms raw Martian Orbiter Laser Altimeter (MOLA) CSV data into high-resolution 3D topography tensors. It features a custom GUI for region selection, a PyTorch-accelerated iterative neighbor-averaging algorithm for data interpolation, and a Matplotlib-based 3D voxel viewer for visualizing Martian craters, mountains, and valleys.",
    techStack: [
      "Python",
      "PyTorch",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Tkinter",
    ],
    specs: [
      { label: "Core Engine", value: "PyTorch GPU Acceleration" },
      { label: "Data Format", value: "32-bit Float Tensors" },
      { label: "Gap Filling", value: "2D Conv Neighbor Averaging" },
      { label: "Downsampling", value: "Max Pooling + Binning" },
      { label: "GUI", value: "Tkinter Map Selection" },
      { label: "Visualization", value: "Matplotlib 3D Voxels" },
    ],
    highlights: [
      "PyTorch 2D convolution loop for intelligent gap filling from sparse data",
      "3D voxelization via broadcasting: fill voxels below recorded altitude",
      "Threaded GUI keeps UI responsive during heavy GPU computation",
      "Memory overflow safety checks on tensor dimensions (X × Y × Z)",
      "Pickle-based tensor library for offline Martian landscape viewing",
    ],
    modules: [
      {
        name: "GPU-Accelerated Tensor Creation",
        description:
          "High-performance processing engine for large-scale geographical datasets.",
        bullets: [
          "Maps Longitude/Latitude to discrete X/Y grid indices",
          "PyTorch 2D convolution loop fills missing data via neighbor-averaging",
          "3D binary tensor voxelization using broadcasting",
        ],
      },
      {
        name: "Interactive Martian Map GUI",
        description:
          "Tkinter-based interface for visual region selection on a Mercator projection.",
        bullets: [
          "Click-and-drag to define area of interest on Mars map",
          "Automatic pixel-to-Lat/Long coordinate conversion",
          "Python threading keeps GUI responsive during computation",
          "Memory overflow prevention via dimension size checks",
        ],
      },
      {
        name: "Data Management Toolchain",
        description:
          "Utility scripts for handling multi-gigabyte MOLA source files.",
        bullets: [
          "Configurable points-per-degree binning and downsampling",
          "File 'zipper' merges multiple regional CSVs into one dataset",
          "Large file splitter for systems with limited RAM (4GB chunks)",
        ],
      },
      {
        name: "3D Martian Voxel Viewer",
        description:
          "Matplotlib 3D projection renderer for generated topography tensors.",
        bullets: [
          "Red voxels with black edges for stylized terrain visualization",
          "Pickle integration for saving/loading processed tensor library",
          "Renders craters, mountains, and valleys from MOLA data",
        ],
      },
    ],
    image: "/projects/martian-topography.png",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
