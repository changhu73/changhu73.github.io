# Copyright Detective - User Guide

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Model Configuration](#model-configuration)
4. [Content Recall Detection](#content-recall-detection)
5. [Knowledge Memorization Detection](#knowledge-memorization-detection)
6. [Persuasive Jailbreak Detection](#persuasive-jailbreak-detection)
7. [Unlearning Detection](#unlearning-detection)
   - [7.1 Prompt-based Detection](#prompt-based-detection)
   - [7.2 Min-k Prob Analysis](#min-k-prob-analysis)
   - [7.3 Representational Analysis](#representational-analysis)
   - [7.4 vLLM Model Setup & Configuration](#vllm-model-setup-configuration)
   - [7.5 Representational Analysis Deployment](#representational-analysis-deployment)
8. [Legal Cases Display](#legal-cases-display)
9. [Tips and Best Practices](#tips-and-best-practices)

---

## Introduction

**Copyright Detective** is a forensic system designed to detect potential copyright leakage risks in Large Language Models (LLMs). The tool provides multiple detection methods to analyze whether an LLM has memorized copyrighted content from its training data.

### Key Features

- **Content Recall Detection**: Analyze text and document memorization through various prompting strategies
- **Knowledge Memorization Detection**: Evaluate knowledge retention using Q&A-based methods
- **Persuasive Jailbreak Detection**: Test adversarial prompting strategies to extract copyrighted content
- **Unlearning Detection**: Verify whether models have truly "forgotten" specific content
- **Legal Cases Display**: Browse relevant legal cases related to copyright and AI

---

## Getting Started

> **Note:** If you are using the system deployed on Streamlit Cloud, you can skip this section. This section is intended for users who want to run the open-source system locally.

### Prerequisites

- Python 3.11 or higher
- API keys for your chosen LLM provider (OpenAI, Anthropic, Google Gemini, OpenRouter, or Local vLLM)
- Required Python packages (install via `pip install -r requirements.txt`)

### Launching the Application

1. **Create and activate a virtual environment:**
   ```bash
   conda create -n copyright-detective python=3.11 -y
   conda activate copyright-detective
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Launch the Streamlit app:**
   ```bash
   streamlit run app.py
   ```

4. **Access the application:**
   - The app will open automatically in your default web browser
   - Default URL: `http://localhost:8501`

---

## Model Configuration

Before using any detection features, you need to configure your LLM provider and model in the sidebar.

### Step 1: Select Provider

Choose from the following providers:
- **OpenAI**: For GPT models (GPT-3.5, GPT-4, etc.)
- **Anthropic**: For Claude models
- **Google Gemini**: For Gemini models
- **OpenRouter**: For accessing multiple models through OpenRouter
- **Local vLLM**: For locally hosted models via vLLM

### Step 2: Enter API Key

- Enter your API key in the **API Key** field
- For Local vLLM, you may need to configure the base URL (e.g., `http://localhost:8000/v1`)

### Step 3: Select Model

- Choose your model from the dropdown or enter a custom model identifier
- The available models depend on your selected provider

### Step 4: Configure Advanced Settings (Optional)

- **Temperature**: Controls randomness (0.0-2.0, default: 0.7)
- **Top-p**: Nucleus sampling parameter (0.0-1.0, default: 0.9)
- **Base URL**: For custom endpoints (mainly for Local vLLM)

---

## Content Recall Detection

The **Content Recall Detection** feature helps identify whether an LLM has memorized specific text content. This feature is divided into two tabs:

### Text Memorization Detection

#### Overview

This mode analyzes text snippets to detect potential memorization. It supports three prompt types:

1. **Next-Passage Prediction**: Tests if the model can continue a given text passage
2. **Direct Probing**: Directly asks the model to reproduce specific content
3. **User-Defined Evaluation**: Use custom prompts for evaluation

#### How to Use

1. **Select Prompt Type:**
   - Choose from the three prompt types in the dropdown

2. **Choose Input Method:**
   - **Custom Input**: Enter your own text
   - **Predefined Examples**: Select from built-in examples (e.g., "A Tale of Two Cities", "Harry Potter and the Sorcerer's Stone")

3. **Enter Input Text:**
   - For **Next-Passage Prediction**: Enter a text snippet that the model should continue
   - For **Direct Probing**: Enter a prompt asking for specific content
   - For **User-Defined Evaluation**: Enter your custom prompt

4. **Enter Ground Truth (Optional but Recommended):**
   - Provide the expected output or reference text
   - This is used for similarity comparison

5. **Configure Generation Settings:**
   - **Inference Runs**: Number of times to run the analysis (default: 1)
   - **Temperature**: Sampling temperature
   - **Top-p**: Nucleus sampling parameter
   - **Chunk Size**: For long texts, specify chunk size

6. **Run Analysis:**
   - Click **"Run Analysis"** to start the detection
   - The system will generate completions and compare them with ground truth

7. **Review Results:**
   - **Similarity Metrics**: ROUGE-L, Jaccard Index, Levenshtein Distance
   - **Visualizations**: Charts showing similarity scores
   - **Detailed Comparison**: Side-by-side comparison of generated vs. ground truth text

#### Understanding Results

- **High Similarity Scores** (ROUGE-L > 0.8, Jaccard > 0.7): May indicate memorization
- **Medium Scores** (0.3-0.7): Partial memorization or general knowledge overlap
- **Low Scores** (< 0.3): Likely no memorization detected

### Document Memorization Detection

#### Overview

This mode analyzes entire PDF documents to detect memorization across multiple passages.

#### How to Use

1. **Upload PDF Document:**
   - Click **"Upload PDF"** and select your document
   - The system will extract text from the PDF

2. **Configure Analysis Settings:**
   - **Chunk Size**: Divide document into chunks for analysis
   - **Prompt Type**: Same options as Text Memorization Detection
   - **Number of Chunks**: How many chunks to analyze

3. **Run Analysis:**
   - Click **"Analyze Document"**
   - The system processes each chunk and generates results

4. **Review Results:**
   - **Per-Chunk Analysis**: Results for each document chunk
   - **Aggregate Metrics**: Overall memorization scores
   - **Heatmap Visualization**: Visual representation of memorization across the document

---

## Knowledge Memorization Detection

The **Knowledge Memorization Detection** feature evaluates whether an LLM has memorized factual knowledge from source materials using question-answer pairs.

### Overview

This feature supports two detection modes:

1. **Open-ended Question**: Generate open-ended questions and evaluate answers
2. **Single-choice Question**: Create multiple-choice questions with verbatim and distractor options

### Open-ended Question Detection

#### How to Use

1. **Provide Source Content:**
   - **Direct Input**: Paste text directly
   - **Document Upload**: Upload a PDF document
   - **Dataset Selection**: Choose from predefined datasets

2. **Generate Q&A Pairs:**
   - Click **"Generate Q&A Pairs"**
   - Specify the number of pairs (default: 5)
   - The system uses an LLM to generate questions and answers from your source

3. **Review Generated Q&A Pairs:**
   - Check the generated questions and answers
   - Edit if necessary

4. **Select Evaluation Mode:**
   - **Standard Q/A Evaluation**: Direct comparison of answers
   - **Step-by-step Leaking and Extraction**: Decompose questions into sub-questions, use Chain-of-Thought reasoning, then compare final answers

5. **Run Evaluation:**
   - Click **"Run Evaluation"**
   - The target LLM answers each question
   - Answers are compared with ground truth using Token-level F1 Score

6. **Review Results:**
   - **Token-level F1 Scores**: Per-question accuracy
   - **Average F1 Score**: Overall memorization indicator
   - **Detailed Per-Question Analysis**: Question, ground truth, model answer, and F1 score

#### Understanding Results

- **High F1 Scores** (> 0.7): Strong indication of memorization
- **Medium F1 Scores** (0.3-0.7): Partial memorization
- **Low F1 Scores** (< 0.3): Likely no memorization

### Single-choice Question Detection

#### How to Use

1. **Provide Source Content:**
   - Same options as Open-ended Question Detection

2. **Extract Text Fragments:**
   - Click **"Extract Fragments"**
   - The system extracts text fragments from your source as correct answers

3. **Generate Distractor Options:**
   - Use a generator LLM to create distractor options
   - Distractors are similar but distinct from the verbatim text

4. **Create Single-choice Questions:**
   - The system creates questions with:
     - One verbatim option (correct answer)
     - Multiple distractor options

5. **Run Evaluation:**
   - The target LLM selects an option for each question
   - Track whether the model consistently prefers verbatim options

6. **Review Results:**
   - **Selection Bias**: Percentage of verbatim options selected
   - **Per-Question Results**: Model's choice for each question
   - **Statistical Analysis**: Significance of selection bias

#### Understanding Results

- **High Selection Bias** (> 70%): Model consistently prefers verbatim text, indicating memorization
- **Random Selection** (~25-33%): No clear memorization pattern
- **Low Selection Bias** (< 20%): Model avoids verbatim text

---

## Persuasive Jailbreak Detection

The **Persuasive Jailbreak Detection** feature tests whether adversarial prompting strategies can extract copyrighted content from LLMs.

### Overview

This feature evaluates how different persuasion strategies can bypass model safeguards to extract memorized content. It includes:

- **Jailbreak Persuasion Probe**: Test predefined persuasion strategies
- **Adversarial Prompting**: Mutate prompts to find effective extraction strategies

### Jailbreak Persuasion Probe

#### How to Use

1. **Enter Input Prompt:**
   - Enter a prompt that should trigger content generation
   - Example: "Continue the following passage: [text snippet]"

2. **Enter Reference Text:**
   - Provide the copyrighted content you're testing for
   - This is used as ground truth for comparison

3. **Select Persuasion Strategies:**
   - Choose from predefined strategies:
     - **Normal Continuation**: Baseline strategy
     - **Roleplay**: Ask model to roleplay as a character
     - **Hypothetical Scenario**: Present a hypothetical situation
     - **Creative Writing**: Frame as creative writing exercise
     - And more...

4. **Select Generation Modes:**
   - **Zero-Shot**: Direct generation
   - **Few-Shot**: Provide examples in the prompt

5. **Configure Settings:**
   - **Temperature**: Sampling temperature
   - **Top-p**: Nucleus sampling parameter
   - **Chunk Size**: For long texts

6. **Run Probe:**
   - Click **"Run Probe"**
   - The system tests each strategy and compares outputs with reference text

7. **Review Results:**
   - **Strategy Comparison**: Similarity scores for each strategy
   - **Best Strategy**: Identifies the most effective strategy
   - **Detailed Outputs**: Generated text for each strategy

### Adversarial Prompting

#### How to Use

1. **Enter Adversarial Prompt:**
   - Enter your initial prompt

2. **Enter Reference Text:**
   - Provide the target copyrighted content

3. **Select Mutation Strategies:**
   - Choose strategies to mutate your prompt:
     - **Paraphrase**: Reword the prompt
     - **Add Context**: Add background information
     - **Change Tone**: Modify the tone/style
     - And more...

4. **Run Mutation:**
   - Click **"Mutate Strategies"**
   - The system generates mutated versions of your prompt

5. **Evaluate Mutations:**
   - Each mutation is tested against the reference text
   - Mutations are ranked by effectiveness (ROUGE scores)

6. **Review Results:**
   - **Ranked Mutations**: Best-performing mutations first
   - **Similarity Metrics**: For each mutation
   - **Intention Preservation**: Whether the mutation maintains the original intent

---

## Unlearning Detection

The **Unlearning Detection** feature verifies whether a model has truly "forgotten" specific content after unlearning procedures.

### Overview

This feature includes multiple detection methods:

1. **Prompt-based Detection**: Use various prompting strategies to probe for residual knowledge
2. **Min-k Prob Analysis**: Analyze token probabilities to detect memorization
3. **Representational Analysis**: Compare model representations (requires deployment service)

### Prompt-based Detection

#### How to Use

1. **Enter Target Description:**
   - Describe the content that should have been "unlearned"
   - Example: "the first chapter of Harry Potter and the Sorcerer's Stone"

2. **Select Detection Strategies:**
   - **Direct Question**: Directly ask about the content
   - **Motivated Roleplay**: Roleplay as a compliance analyst
   - **Indirect Summary**: Request a summary of the content
   - **Custom Prompt**: Enter your own prompt

3. **Run Detection:**
   - Click **"Run Detection"**
   - The system probes the model with each strategy

4. **Review Results:**
   - **Response Analysis**: Model's responses to each probe
   - **Residual Knowledge Indicators**: Signs that content wasn't fully unlearned
   - **Strategy Comparison**: Which strategies are most effective

### Min-k Prob Analysis

#### How to Use

1. **Enter Prompt:**
   - Enter a prompt related to the unlearned content

2. **Configure Settings:**
   - **K Percentage**: Percentage of tokens to analyze (default: 10%)
   - **Temperature**: Sampling temperature
   - **Top-p**: Nucleus sampling parameter

3. **Run Analysis:**
   - Click **"Run Min-k Prob Analysis"**
   - The system analyzes token probabilities

4. **Review Results:**
   - **Probability Distribution**: Token probability analysis
   - **Anomaly Detection**: Unusual probability patterns
   - **Memorization Indicators**: Signs of memorization based on probabilities

### Representational Analysis

#### Prerequisites

This feature requires a deployment service running on a remote server. See the README for setup instructions.

#### How to Use

1. **Configure Deployment Agent:**
   - Enter the **Deployment Agent URL** (from Cloudflare tunnel)
   - Enter the **KEY** (API key for the deployment service)

2. **Set Model Paths:**
   - **Reference Model Path**: Path to the original model (on server)
   - **Unlearned Model Path**: Path to the unlearned model (on server)

3. **Select Analysis Type:**
   - **CKA (Centered Kernel Alignment)**: Compare model representations
   - **Fisher Information**: Analyze information content
   - **PCA Shift Analysis**: Principal component analysis
   - **PCA Similarity**: Similarity in PCA space

4. **Run Analysis:**
   - Click **"Run Representational Analysis"**
   - The system compares model representations

5. **Review Results:**
   - **Similarity Scores**: How similar the models are
   - **Visualizations**: Charts showing representation differences
   - **Statistical Tests**: Significance of differences

---

### vLLM Model Setup & Configuration

The following sections provide detailed setup instructions for using vLLM models with Unlearning Detection, particularly for Representational Analysis.

#### 🌐 Sidebar — vLLM Model Setup & Usage

##### Scenario A — Run the App Locally, Serve vLLM Remotely (Private Network / No Public Exposure, you can also use the method in scenario B)

Use this setup when your **vLLM model is deployed on a remote server**, but you run **this project locally** (e.g., on your laptop). The vLLM endpoint is reachable via your internal network/VPN/SSH tunnel, and you **do not** need to expose it to the public internet.

###### 1) Server (Remote): Start vLLM

Run on the remote server:

```bash
vllm serve YOUR_MODEL_PATH \
  --host 0.0.0.0 \
  --port 8000 \
  --tensor-parallel-size 4 \
  --api-key YOUR_API_KEY \
  --served-model-name YOUR_MODEL_NAME
```

###### 2) Client (Local): Connect to the Server (Optional)

If you need to log into the remote server:

```bash
ssh YOUR_USER@YOUR_SERVER_IP
```

###### 3) App (Local): Configure Model Selection

In the Streamlit sidebar, go to **✨ Model Selection** and set:

- **Provider:** `Local vLLM`
- **Input Model Choice:** `YOUR_MODEL_ID` *(optional; used only as an identifier/label)*

> **Note:** Ensure your API key is configured correctly. For GPU-based features, install `torch` with CUDA support on the machine that runs GPU workloads.

**Responsible use:** This workspace is intended for auditing and defense research. Handle all generated content responsibly, follow institutional review policies, and do not redeploy harmful variants outside controlled evaluation environments.

---

##### Scenario B — Run vLLM Remotely and Access It from the Web (Expose via ngrok)

Use this setup when you want to **expose your remote vLLM endpoint** to the public internet (for temporary demos or remote access). This uses **ngrok** as a secure tunnel.

###### 1) Server (Remote): Start vLLM (Bind to localhost)

On the deployment server, run:

```bash
vllm serve YOUR_MODEL_PATH \
  --host 127.0.0.1 \
  --port 8000 \
  --tensor-parallel-size 4 \
  --api-key YOUR_API_KEY \
  --served-model-name YOUR_MODEL_NAME
```

Wait until you see:

```bash
Uvicorn running on http://127.0.0.1:8000
```

###### 2) Server (Remote): Install and Configure ngrok

```bash
wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz
tar xvzf ngrok-v3-stable-linux-amd64.tgz
./ngrok config add-authtoken <YOUR_TOKEN>
```

###### 3) Server (Remote): Start ngrok

```bash
./ngrok http 8000
```

You should see output like:

```bash
Forwarding https://xxxx-xxx-xxx.ngrok-free.dev -> http://localhost:8000
```

###### 4) App: Set the Base URL

In the app settings, set **Base URL** to:

```text
https://xxxx-xxx-xxx.ngrok-free.dev/v1
```

> **Tip:** The `/v1` suffix is required for OpenAI-compatible APIs served by vLLM.

---

##### 🌐 vLLM Multi-Model Serving (2 Models) — Setup & Usage (Optional)

If you want to use **multiple vLLM models at the same time**, you can route them through a single public endpoint using **Caddy + ngrok**.

###### 1) Server: Start Two vLLM Instances (Localhost)

```bash
# Model 1
vllm serve /path/to/model1 \
  --host 127.0.0.1 \
  --port 8000 \
  --api-key YOUR_API_KEY \
  --served-model-name 1

# Model 2
vllm serve /path/to/model2 \
  --host 127.0.0.1 \
  --port 8001 \
  --api-key YOUR_API_KEY \
  --served-model-name 2
```

###### 2) Server: Install Caddy

```bash
wget https://github.com/caddyserver/caddy/releases/download/v2.8.4/caddy_2.8.4_linux_amd64.tar.gz
tar -zxvf caddy_2.8.4_linux_amd64.tar.gz
chmod +x caddy
./caddy version
```

###### 3) Server: Configure `Caddyfile` (Reverse Proxy by Path)

Create / edit `Caddyfile`:

```caddyfile
:8081 {
    handle_path /m1/* {
        reverse_proxy 127.0.0.1:8000
    }

    handle_path /m2/* {
        reverse_proxy 127.0.0.1:8001
    }
}
```

Run Caddy:

```bash
./caddy run --config Caddyfile > caddy.log 2>&1 &
```

###### 4) Server: Expose via ngrok

```bash
./ngrok http 8081
```

Now you can access:

- **Model 1** via: `https://xxxx-xxx-xxx.ngrok-free.dev/m1/v1`
- **Model 2** via: `https://xxxx-xxx-xxx.ngrok-free.dev/m2/v1`

> **Note:** Keep the `/v1` suffix for OpenAI-compatible APIs served by vLLM.

---

### Representational Analysis Deployment

This section provides detailed instructions for setting up the deployment service required for Representational Analysis.

#### Overview

This module runs a lightweight deployment service on your **remote server**, then exposes it to your local Streamlit app via a temporary Cloudflare tunnel.

#### 1) Server (Remote): Start the Deployment Service

Export your key:

```bash
export YOUR_API_KEY="your_api_key"
```

Run the deployment script on your server: [unlearning_deployment.py](https://changhu73.github.io/files/project/copyright%20detective/unlearning_deployment.py).

Once the service is running and the tunnel is up, you can use **Representational Analysis (Unlearning Detection)** directly from the app UI.

#### 2) Server (Remote): Install `cloudflared` and Start a Quick Tunnel

On your server, download and start Cloudflare Tunnel:

```bash
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64
chmod +x cloudflared-linux-amd64
./cloudflared-linux-amd64 tunnel --url http://localhost:1234
```

You should see output similar to:

```bash
Requesting new quick Tunnel on trycloudflare.com...
+--------------------------------------------------------------------------------------------+
|  Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):  |
|  https://cool-server-link.trycloudflare.com                                                |
+--------------------------------------------------------------------------------------------+
```

Copy the generated `https://*.trycloudflare.com` link and paste it into the app:

- **Deployment Agent URL** → `https://cool-server-link.trycloudflare.com`

- **KEY** → `your_api_key`

> **Note:** It may take a short time before the tunnel becomes reachable.

#### 3) App: Set Model Paths (Absolute Paths on the Server)

In **Representational Analysis (Unlearning Detection)**, provide the **absolute paths on the deployment server**:

- **Reference model path** → `/absolute/path/to/reference_model`
- **Unlearned model path** → `/absolute/path/to/unlearned_model`

> The paths must be server-local absolute paths (not your local machine paths).

---

## Legal Cases Display

The **Legal Cases Display** page provides information about legal cases related to copyright and AI.

### How to Use

1. **Browse Cases:**
   - Scroll through the list of legal cases
   - Each case includes:
     - Case name
     - Court/jurisdiction
     - Key issues
     - Relevant dates

2. **Search Cases:**
   - Use the search functionality to find specific cases
   - Filter by jurisdiction, date, or keywords

3. **View Case Details:**
   - Click on a case to view detailed information
   - Includes case summary, key rulings, and implications

---

## Tips and Best Practices

### General Tips

1. **Start with Simple Tests:**
   - Begin with well-known copyrighted content (e.g., famous books)
   - Use predefined examples to understand the system

2. **Use Multiple Detection Methods:**
   - Combine different detection approaches for more reliable results
   - Cross-validate findings across methods

3. **Set Appropriate Parameters:**
   - **Temperature**: Lower values (0.3-0.5) for more deterministic outputs
   - **Inference Runs**: Run multiple times for statistical significance

4. **Provide Ground Truth:**
   - Always provide reference text when possible
   - This improves accuracy of similarity metrics

5. **Interpret Results Carefully:**
   - High similarity doesn't always mean memorization
   - Consider context, common knowledge, and model capabilities

### Content Recall Detection Tips

- **Chunk Size**: For long documents, use appropriate chunk sizes (500-1000 words)
- **Prompt Types**: Try different prompt types to see which is most effective
- **Multiple Runs**: Run analysis multiple times to account for randomness

### Knowledge Memorization Detection Tips

- **Q&A Quality**: Review generated questions for relevance and specificity
- **Evaluation Mode**: Use Step-by-step Leaking for complex questions
- **Fragment Selection**: Choose distinctive fragments for single-choice questions

### Persuasive Jailbreak Detection Tips

- **Strategy Selection**: Test multiple strategies to find the most effective
- **Iterative Refinement**: Use adversarial prompting to refine strategies
- **Reference Text**: Use actual copyrighted content for accurate testing

### Unlearning Detection Tips

- **Multiple Strategies**: Use various detection strategies for comprehensive evaluation
- **Baseline Comparison**: Compare unlearned model with original model
- **Statistical Significance**: Run multiple tests to ensure reliability

### Troubleshooting

1. **API Errors:**
   - Verify API key is correct
   - Check API rate limits
   - Ensure network connectivity

2. **Model Not Responding:**
   - Check model availability
   - Verify base URL for Local vLLM
   - Check server logs

3. **Low Similarity Scores:**
   - Verify ground truth text is correct
   - Try different prompt types
   - Adjust temperature and top-p parameters

4. **PDF Upload Issues:**
   - Ensure PDF is not password-protected
   - Check PDF is not corrupted
   - Try extracting text manually first

---

> **⚠️ Disclaimer: Non-Commercial Research Project**
>
> This project, **Copyright Detective**, is an independent academic research initiative.
>
> It is **NOT** affiliated with, endorsed by, or connected to **"The Copyright Detective"** or any of its associated commercial entities.
>
> This software is strictly **non-commercial**, created solely for **research purposes**. No commercial gain is intended or realized.
>
> If you are a trademark owner and have any concerns, please contact the author directly at **ch0703@ustc.edu** before taking further action. I am open to cooperation to resolve any potential confusion.

---

> This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**.