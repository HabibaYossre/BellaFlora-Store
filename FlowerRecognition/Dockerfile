FROM python:3.12-slim

WORKDIR /FlowerRecognition

# Copy and install base (heavy deps, cached)
COPY requirements-base.txt .
RUN pip install --no-cache-dir -r requirements-base.txt

# Copy and install extras (lighter deps, changes more often)
COPY requirements-extra.txt .
RUN pip install --no-cache-dir -r requirements-extra.txt

# Copy model + app
COPY my_model.keras .
COPY app.py .

EXPOSE 8000

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
