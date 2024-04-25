
kubectl apply -f k_namespace.yaml
    kubectl config set-context --current --namespace=mi-namespace

kubectl apply -f k_pod1.yaml
    kubectl get pods -l <label>=<value>
    kubectl get pods -l app=myapp

*****************************************************

kubectl create secret generic my-secret --from-literal=password=mypassword
kubectl create configmap my-config --from-literal=apiUrl=http://miapi.com --from-literal=apiToken=12345




*****************************************************

kubectl config view --minify | grep namespace
kubectl delete namespace mi-namespace

kubectl delete -f deployment.yaml

kubectl get pods --namespace=mi-namespace
kubectl get pods -n mi-namespace

*****************************************************

