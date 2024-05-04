#!/bin/bash

# Function to check if the script is executable
check_executable() {
    if [[ -x "$0" ]]; then
        echo "Script is already executable."
    else
        echo "Script is not executable. Making it executable..."
        chmod +x "$0"
    fi
}

# Ensure the script is executable
check_executable

# Update the package list
echo "Updating package list..."
sudo apt update

# Install PostgreSQL and associated tools
echo "Installing PostgreSQL and postgresql-contrib..."
sudo apt install -y postgresql postgresql-contrib

# Start and enable PostgreSQL
echo "Starting and enabling PostgreSQL..."
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Check PostgreSQL service status
echo "Checking PostgreSQL service status..."
sudo systemctl status postgresql

# Switch to the PostgreSQL user and perform interactive steps
echo "Switching to the PostgreSQL user..."

# Create a new PostgreSQL user (optional)
echo "Creating a new PostgreSQL user..."
sudo -u postgres createuser --interactive

# Create a new database (optional)
echo "Creating a new PostgreSQL database..."
read -p "Enter the name for the new database: " dbname
sudo -u postgres createdb "$dbname"

# Set the password for the postgres user
read -sp "Enter the new password for the postgres user: " password
echo
sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD '$password';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE \"$dbname\" TO postgres;"

# Access the PostgreSQL prompt (optional)
echo "Accessing PostgreSQL prompt..."
sudo -u postgres psql
