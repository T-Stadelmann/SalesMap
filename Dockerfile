FROM continuumio/miniconda3:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy\
    wget \
    bzip2 \
    graphviz \
    libssl-dev \
    openssh-server

RUN curl -sL https://deb.nodesource.com/setup_13.x | bash - && apt-get install -y nodejs && apt-get install -y npm

RUN mkdir /var/run/sshd
RUN echo "root:screencast" | chpasswd
RUN sed -i "/PermitRootLogin/c\PermitRootLogin yes" /etc/ssh/sshd_config

RUN sed "s@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g" -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

RUN mkdir -p /backend

COPY ./backend/requirements.yml /backend/requirements.yml
RUN /opt/conda/bin/conda env create -f /backend/requirements.yml
ENV PATH /opt/conda/envs/salesmap/bin:$PATH

RUN echo "source activate salesmap" >~/.bashrc

COPY ./scripts /scripts
RUN chmod +x ./scripts*

COPY ./backend/ /backend

RUN mkdir -p /frontend
RUN mkdir -p /frontend_tmp
WORKDIR frontend_tmp



COPY ./frontend/package.json /frontend_tmp/
COPY ./frontend/package-lock.json /frontend_tmp/

RUN npm install -g npm@latest
RUN npm cache verify
RUN npm i redux react-redux semantic-ui-react
COPY ./frontend /frontend_tmp
RUN npm run build


WORKDIR /backend
